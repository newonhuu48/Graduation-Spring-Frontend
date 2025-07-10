pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NODE_JS_TOOL_NAME', type: 'NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
        IMAGE_NAME = 'graduation-spring-frontend' // your image name
        IMAGE_TAG = 'latest'                      // or branch, build number, etc.
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

        stage('Run Docker Compose') {
            steps {
                sh 'docker compose -f docker-compose.yml up -d'
            }
        }
    }

    post {
        always {
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