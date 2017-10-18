def app1
def app2
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
	
	// git branch: 'master',
        // url: 'https://github.com/mbouluad/showcase.git' 
    }
  }
  stage("Build containers") { 	
      parallel {
          stage('Build service 1') {            
              steps {
                 dir ('service1') { 
                    script {       
                        app1 = docker.build("dtr.finaxys.com/mbouluad/service1")
                    }
                 }
              }
                   
           }
           stage('Build service 2') {        
               steps {
                  dir ('service2') { 
                      script {
                         app2 = docker.build("dtr.finaxys.com/mbouluad/service2")
                      }
                   }
               }
                  
           }
      }
    
    }
    stage("Deploy to DTR") {
  
      steps {

         parallel (
            "Service 1" : {
               
                   script {
           
                      docker.withRegistry('https://dtr.finaxys.com', 'dtr') {

                      app1.push("${env.BUILD_NUMBER}")
                      app1.push("latest")
                      }
                   }
            },
            "Service 2" : {
               
                   script {
           
                      docker.withRegistry('https://dtr.finaxys.com', 'dtr') {

                      app2.push("${env.BUILD_NUMBER}")
                      app2.push("latest")
                      }
                   } 
            }
        )


      }
    }
    stage("Deploy stack") {
      steps {
           script {
             docker.withServer('tcp://ucp.finaxys.com:443', 'ucpfinaxys') {
               sh "docker info"
               sh "docker stack deploy -c docker-compose.yml ${env.JOB_NAME}" 
      
             }
           }
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
