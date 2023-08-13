#### Portifolio de testes de performance K6
Neste fremework mostro um pouco sobre teste de estresse com K6, com configuracao de rampups, monitor no data dog, thresholds.
E neste readme passo a passo de configuração e execução.
## Configurando o SSH

### Ubuntu & Windows & MacOS

Acessar o terminal (Ctrl+Alt+T) e executar o seguinte comando:

```bash
ssh-keygen -o -t rsa -C “Email Swap”
```

Após executar o comando selecionar a tecla 'Enter' para definir o local padrão e a senha (caso desejar). Com o arquivo com a SSH Key devidamente gerado sera necessário verificar a mesma para uso posterior no Gitlab, para obter a key de maneira prática utilize o comando:

```bash
cat ~/.ssh/id_rsa.pub
```
Para usuários MacOS é possível obter a chave através do 'Nano', com o seguinte comando:
```bash
nano ~/.ssh/id_ed25519
```
Caso o arquivo esteja vazio no MacOS, copiar o seguinte código no arquivo:
```bash
Host *
    AddKeysToAgent yes
    Usekeychain yes
    IdentityFile ~/.ssh/id_ed25519
```

## Configurando o Git

Com a SSH Key em mãos, acessar o Gitlab no seguinte link:

```bash
https://github.com/-/profile/keys
```
Preencher os campos 'Title', 'Key' com a chave gerada e finalize selecionando o botão 'Add Key'.

## Clonando o projeto

Primeiramente é necessário criar um diretório para o projeto e acessar o projeto no Gitlab no seguinte link:
```bash
https://github.com/bonfatti10/performance-test-k6
```
Após acessar o link, clonar o projeto do Gitlab, para isso é necessário selecionar o botão 'Clone' e copiar o conteúdo do campo 'Clone with SSH'. 

Acessar o diretório do projeto via terminal através do seguinte comando:
```bash
cd /"Caminho do diretório"
```
Dentro do diretório sera necessário utilizar o seguinte comando:
```bash
git clone "Conteúdo do campo Clone with SSH"
```

## Instalando o k6
Para instalar o K6 é ncessário executar a seguinte sequência de comandos no terminal:
### Linux Ubuntu/Debian
```bash
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
```
```bash
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
```
```bash
sudo apt-get update
```
```bash
sudo apt-get install k6
```

### Fedora/CentOS
```bash
sudo dnf install https://dl.k6.io/rpm/repo.rpm
```
```bash
sudo dnf install k6
```

### Windows
Usando o Chocolatey:
```bash
choco install k6
```
Usando os pacotes de gerenciamento do Windows:
```bash
winget install k6
```

### MacOS
Usando o homebrew:
```bash
brew install k6
```

## Executando o script em K6

Para executar um script isolado no projeto de K6, é necessário acessar via terminal o diretório de 'cases' do projeto e executar o seguinte comando:
```bash
k6 run NomeDoDiretório/NomeDoScript.js
```

Caso desejar executar mais de um script de forma sequencial, porém com os relatórios gerados de forma isolada, será necessário executar o seguinte comando:
```bash
k6 run NomeDoScript1.js; k6 run NomeDoScript2.js
```
## Executando o teste no K6 e monitorando as metricas no DataDog
```bash
K6_STATSD_ENABLE_TAGS=true k6 run --out statsd tests/caminhoDasPastas/NomeDoArquivo_scenario.js

exemplo: K6_STATSD_ENABLE_TAGS=true k6 run --out statsd tests/register_test/new_register.js

```
## Gerando um arquivo CSV
--console-output=./NomeDoArquivo.csv

Developed by Bonfatti
