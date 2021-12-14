# Desafio

## Sobre
Aplicativo de imóveis para demonstrar capacidades.

## Como rodar localmente
Rode yarn install;

Rode o comando yarn android;

### Como rodar deploy / gerar APK (Para deploy geralmente utilizo o App Center)
Rode o comando yarn build

O APK será gerado dentro da pasta "android/app/build/outputs/apk/debug/app-debug.apk

## Testes
Tomei a liberdade de criar alguns testes unitários e um pequeno teste e2e utilizando detox para demonstrar.

Testes unitários: rode yarn test-jest 
===========================================
Testes e2e : rode yarn test-build e logo em seguida rode yarn test

*IMPORTANTE*
Para os testes e2e é necessário você alterar o nome do seu emulador no arquivo "/detoxrc.json".
    
Altere o nome da propriedade "avdName" para o nome do seu emulador.


