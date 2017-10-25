FROM openjdk:8-jre-alpine
FROM maven:3-jdk-8
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    JHIPSTER_SLEEP=0 \
    JAVA_OPTS=""

CMD mvn clean install
#ADD target/service-2-0.0.1-SNAPSHOT.war /app.war

EXPOSE 8081 5701/udp
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    sleep ${JHIPSTER_SLEEP} && \
    java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar target/service-2-0.0.1-SNAPSHOT.war #/app.war
