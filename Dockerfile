#FROM is the base image for which we will run our application
FROM httpd:latest
# Copy files and directories from the application
COPY leejiawei_portfolio/ /usr/local/apache2/htdocs/



