pipeline {
    agent any

    environment{
        NETLIFY_ID = '15188cfd-02b2-4c7e-a68e-b60652a624e3'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token-global')
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Test'){
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    test -f dist/index.html
                    npm run test
                '''
            }
        }

        stage('E2E'){
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.55.0-noble'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    npm ci
                    npx playwright test
                '''
            }
        }

        stage('Deploy'){
            agent {
                docker {
                    image 'node:22-alpine'
                    args '-u root'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install -g netlify-cli@20.1.1
                    netlify --version
                    echo "프로젝트 아이디 확인: $NETLIFY_ID"
                    netlify deploy \
                    --prod \
                    --dir=dist \
                    --site=$NETLIFY_ID \
                    --auth=$NETLIFY_AUTH_TOKEN
                '''
            }
        }
    }

    post {
        always {
            junit 'reports/junit.xml'
        }
    }
}
