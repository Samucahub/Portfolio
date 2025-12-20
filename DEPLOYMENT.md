# Deployment Guide - Azure VM with Docker & Nginx

## Pré-requisitos na Azure VM

1. **Docker e Docker Compose instalados**
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

2. **Git instalado**
```bash
sudo apt update
sudo apt install git -y
```

3. **Certbot para SSL (Let's Encrypt)**
```bash
sudo apt install certbot -y
```

## Passos para Deploy

### 1. Configurar DNS
Aponta o domínio `samurocha.me` para o IP da tua Azure VM:
- A record: `samurocha.me` → `<IP-Azure-VM>`
- A record: `www.samurocha.me` → `<IP-Azure-VM>`

### 2. Clonar o repositório na Azure VM

```bash
cd ~
git clone <seu-repositorio-git>
cd next-portfolio
```

### 3. Obter certificados SSL (primeira vez)

```bash
# Parar nginx se estiver a correr
docker-compose down

# Obter certificado
sudo certbot certonly --standalone -d samurocha.me -d www.samurocha.me

# Certificados ficarão em:
# /etc/letsencrypt/live/samurocha.me/fullchain.pem
# /etc/letsencrypt/live/samurocha.me/privkey.pem
```

### 4. Configurar permissões do script de deploy

```bash
chmod +x deploy.sh
```

### 5. Primeira execução

```bash
./deploy.sh
```

ou manualmente:

```bash
docker-compose up --build -d
```

### 6. Verificar se está a correr

```bash
docker-compose ps
docker-compose logs -f
```

Acede a: **https://samurocha.me**

### 7. Configurar renovação automática SSL

```bash
# Testar renovação
sudo certbot renew --dry-run

# Adicionar cron job para auto-renovação
sudo crontab -e

# Adicionar esta linha (renova às 3h da manhã todos os dias)
0 3 * * * certbot renew --quiet && docker-compose restart nginx
```

## Comandos Úteis

### Ver logs em tempo real
```bash
docker-compose logs -f
docker-compose logs -f nginx
docker-compose logs -f next-portfolio
```

### Reiniciar serviços
```bash
docker-compose restart
docker-compose restart nginx
```

### Parar tudo
```bash
docker-compose down
```

### Atualizar com novas mudanças
```bash
./deploy.sh
```

ou manualmente:

```bash
git pull
docker-compose down
docker-compose up --build -d
```

### Ver uso de recursos
```bash
docker stats
```

### Limpar recursos não utilizados
```bash
docker system prune -a
```

## Estrutura de Portas

- **Porta 80**: HTTP → Redireciona para HTTPS
- **Porta 443**: HTTPS (SSL/TLS)
- **Porta 3000**: Next.js (interno, não exposto)

## Troubleshooting

### Container não inicia
```bash
docker-compose logs next-portfolio
```

### Nginx não está a fazer proxy
```bash
docker-compose logs nginx
```

### Erro de certificado SSL
```bash
# Verificar certificados
sudo ls -la /etc/letsencrypt/live/samurocha.me/

# Renovar manualmente
sudo certbot renew --force-renewal

# Reiniciar nginx
docker-compose restart nginx
```

### Verificar conectividade
```bash
# Testar localmente
curl http://localhost
curl https://localhost -k

# Testar externamente (no teu PC)
curl http://samurocha.me
curl https://samurocha.me
```

### Firewall Azure
Certifica-te que as portas estão abertas no Network Security Group:
1. Acede ao portal Azure
2. Vai ao teu VM > Networking > Network Security Group
3. Adiciona regras de entrada:
   - HTTP: Port 80, Protocol TCP, Source: Any
   - HTTPS: Port 443, Protocol TCP, Source: Any

### Verificar redirecionamento HTTP → HTTPS
```bash
curl -I http://samurocha.me
# Deve retornar: HTTP/1.1 301 Moved Permanently
# Location: https://samurocha.me/
```

## Backup

### Backup dos certificados SSL
```bash
sudo tar -czf ssl-backup-$(date +%Y%m%d).tar.gz /etc/letsencrypt
```

### Backup da aplicação
```bash
docker-compose down
tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz .

# Restaurar
tar -xzf portfolio-backup-YYYYMMDD.tar.gz
docker-compose up -d
```

## Monitorização

### Ver estado dos containers
```bash
docker-compose ps
```

### Ver uso de CPU/RAM
```bash
docker stats --no-stream
```

### Logs por tempo
```bash
docker-compose logs --since 1h
```

### Verificar expiração do certificado SSL
```bash
sudo certbot certificates
```

## Segurança Adicional

### Verificar headers de segurança
```bash
curl -I https://samurocha.me
```

Deves ver:
- `Strict-Transport-Security: max-age=31536000`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`

### Testar SSL
- https://www.ssllabs.com/ssltest/
- Insere `samurocha.me` e verifica o rating (deve ser A ou A+)
