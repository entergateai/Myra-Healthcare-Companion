FROM botpress/server:v11_9_0
ADD . /botpress
WORKDIR /botpress
CMD ["./bp"]