pipeline {
    agent any

    stages {
        stage('Fetch Repo') {
            steps {
                git credentialsId: '27da3b3a-50bd-4ff0-bc95-ff19f1a7cbec', url: 'https://github.com/mainak92/diamond-sweeper-game'
            }
        }
        stage('Install Npm') {
            steps {
                bat 'npm install'
            }
        }
        stage('Create Build File') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
