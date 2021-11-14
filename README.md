# Social-Coin-Chart

    - Create Soical Network Coin Information Chart with React-Native and FireBase

## Index

- #01 Init

  - Firebase Settings

  ```bash
  npm install --save @react-native-firebase/app
  ```

  - 1. firebase.google.com 접속
  - 2. 콘솔로 이동 버튼 클릭
  - 3. 프로젝트 생성
  - 4. Android App에 Firebase추가 진행 (디버그 서명 인증서 SHA-1을 만드려면 만든 프로젝트 root로 가서 android파일로 이동 후 ./gradlew signingReport 입력 )
  - 5. 그 이후는 문서에서 계속 하라는대로 하면 됩니다.

  - Build & Running시, 안드로이드 에뮬레이터가 자동으로 안 켜지는 에러가 발생하면 그냥 에뮬레이터 직접 키세요.

  - Build & Running시, (안드로이드 빌드할 때 만약, SDK location not found라는 에러가 발생하면, 해당 프로젝트의 android폴더에 local.properties파일에(없다면 생성) sdk.dir = /Users/yourusername/Library/Android/sdk 를 작성해주면 된다.

- #02 Apply Typescript

  ```bash
  npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
  ```

- #03 IOS Setup for Firebase

  - 1. 일단 firebase.google.com 접속하고 위에서 했던 대로 프로젝트를 만드는데 (IOS앱으로)
  - 2. 이후 작업을 더 해줘야함 여기서 https://rnfirebase.io/#3-ios-setup (보고 따라하면 됩니다)
  - 3. 저 위에 다하면 (4번 전까지) npx pod-install 실행

- #04 Firebase Authentication for Testing App

  - Authentication을 firebase에서 install하면, auth().currentUser를 찍을수가 있는데 이 녀석이 현재 유저가 없으므로 null을 리턴하면
    정상적으로 테스트가 끝난다. 즉, firebase setup이 정상적으로 된거라고 볼 수 있다.

  ```bash
  npm i @react-native-firebase/auth
  npx pod-install
  ```

- #05 Navigation Screen depending on LoggedInState

- #06 LoggedIn by using firebase

- #07 React Query

  ```bash
  npm i react-query
  ```
