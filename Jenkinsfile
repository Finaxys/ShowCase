import java.text.SimpleDateFormat

pipeline {
  agent {
    label "jenkinsslave"
  }
  options {
    buildDiscarder(logRotator(numToKeepStr: '2'))
    disableConcurrentBuilds()
  }
  stages {
  stage("Clean workspace") {
steps {

      deleteDir()
      sh 'ls -lah'
    }
}
  stage("Git Checkout") {
steps {
    
        //Checkout code from repository
          checkout scm
	
	 //git branch: 'master',
         //   url: 'https://github.com/mbouluad/showcase.git' 
    }
}
    stage("Build containers") {
      steps {
        script {
          def dateFormat = new SimpleDateFormat("yy.MM.dd")
          currentBuild.displayName = dateFormat.format(new Date()) + "-" + env.BUILD_NUMBER
        }
        sh "pwd"
        sh "ls" 
        sh "docker build -t dtr.finaxys.com/mbouluad/service1 ./service1"
	sh "docker build -t dtr.finaxys.com/mbouluad/service2 ./service2"
      }
    }
    stage("Deploy to DTR") {
      steps {
        sh "docker tag dtr.finaxys.com/mbouluad/service1 dtr.finaxys.com/mbouluad/service1:${currentBuild.displayName}"
        sh "docker tag dtr.finaxys.com/mbouluad/service2 dtr.finaxys.com/mbouluad/service2:${currentBuild.displayName}"
  
        sh "docker push dtr.finaxys.com/mbouluad/service1:${currentBuild.displayName}"
 	sh "docker push dtr.finaxys.com/mbouluad/service2:${currentBuild.displayName}"
      }
    }
    stage("Deploy stack") {
      agent {
        label "jenkinsslave"
      }
      steps {
      	  sh "docker stack deploy -c docker-compose.yml ${env.JOB_NAME}" 
      }
    }
  }
  post {
    success {
        echo"service:${currentBuild.displayName} was built and pushed to the registry. Upgrade the clusters."
      
    }
    failure {

        echo "${env.JOB_NAME} failed: ${env.RUN_DISPLAY_URL}"
    }
  }
}
