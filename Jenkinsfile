pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building node app'
        sh 'npm install'
        archiveArtifacts '*.log'
      }
    }

    stage('Test') {
      steps {
        echo 'Testing node app'
        sh './script/test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying node app'
      }
    }

  }
  tools {
    nodejs 'nodejs14'
  }
}