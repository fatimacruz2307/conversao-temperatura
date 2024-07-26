pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clona o repositório do GitHub
                git 'https://github.com/seu-usuario/seu-repositorio.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instala as dependências do Node.js
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Executa os testes com Jest
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Build and tests successful.'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
