pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NODE_JS_TOOL_NAME', type: 'NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
        IMAGE_NAME = 'graduation-spring-frontend'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React app') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Run Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Run Docker Compose') {
            steps {
                sh 'docker compose -f docker-compose.yml up -d'
            }
        }
    }

    post {
        always {
            //Clean Files and Directories That Were Generated While Building
            cleanWs()
        }
        success {
            echo 'Frontend Docker image built successfully.'
        }
        failure {
            echo 'Build failed.'
        }
    }
}