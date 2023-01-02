# Projeto 08: Cadastro CRUD

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

4. Acesse a área do firestore database do projeto no site firebase

5. Clique em `Create database`, selecione o modo desejado (usaremos o teste para exemplo) e escolha a localidade

6. Acesse a área de autenticação do projeto no site firebase
