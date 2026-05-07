pipeline {
    agent any

    stages {
        stage('Hello') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseMode true
                }
            }
            steps {
                sh '''
                    ls -al
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -al
                '''
            }
        }
    }
}
