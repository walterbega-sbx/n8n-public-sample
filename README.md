# Projeto .NET Core

Este repositório contém um projeto desenvolvido com .NET Core.

## Pré-requisitos

Para compilar e executar este projeto, você precisará ter o [.NET SDK](https://dotnet.microsoft.com/download) instalado em sua máquina.

## Como Começar

Siga os passos abaixo para configurar o ambiente de desenvolvimento e executar o projeto localmente.

### 1. Clone o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_DIRETORIO>
```

### 2. Restaure as Dependências

Navegue até o diretório raiz do projeto (onde o arquivo `.sln` ou `.csproj` está localizado) e execute o seguinte comando para baixar as dependências do NuGet:

```bash
dotnet restore
```

### 3. Compile o Projeto

Para garantir que tudo está configurado corretamente e que não há erros de compilação, execute o comando de build:

```bash
dotnet build
```

### 4. Execute o Projeto

Após a compilação bem-sucedida, você pode iniciar a aplicação com o comando:

```bash
dotnet run
```

A aplicação será iniciada e estará acessível no endereço `http://localhost:5000` ou `https://localhost:5001` (verifique o output do console para a URL exata).
