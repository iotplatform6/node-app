pipeline {

  agent any 
  tools {nodejs "nodejs"}
  stages {
  
    stage("Build") {
      steps {
        echo "Building node app"
        sh 'npm install'
      }
    }
    
    stage("Test") {
      steps {
        echo "Testing node app"
        sh 'npm test'
      }
    }
    
    stage("Deploy") {
      steps {
        echo "Deploying node app"
      }
    }
    
  }
}



