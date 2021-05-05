FROM ubuntu

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080
EXPOSE 8000

CMD ["python", "manage.py", "runserver"]
