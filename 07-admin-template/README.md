# Projeto 07: Admin Template

### Configuração do Projeto

1. Crie um projeto em https://console.firebase.google.com/ (não precisa ativar Google Analytics)
2. Adicione, ao projeto criado, um aplicativo web (não precisa configurar o hosting)
3. Crie um arquivo `.env.local` na raiz do projeto (07-admin-template/.env.local) com o seguinte conteúdo:

```
NEXT_PUBLIC_FIREBASE_API_KEY=<Insira aqui o valor de apiKey>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<Insira aqui o valor de authDomain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<Insira aqui o valor de projectId>
```

Os valores devem ser inseridos **sem aspas**, exemplo:

```
NEXT_PUBLIC_FIREBASE_API_KEY=123456789abcdefgh
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nome-domeu-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=nome-domeu-app
```

4. Acessa a área de autenticação do projeto no site firebase
5. Em `Sign-in method` > `Provedores de login`, habilite `E-mail/senha` e `Google`

> Note a área de `Domínios Autorizados`. Ao realizar o deploy do projeto, adicione o domínio nesta lista, para que seja possível efetuar o login a partir dele.
