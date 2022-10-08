FROM python:3.10

RUN mkdir /code
WORKDIR /code
ADD requirement.txt /code/
RUN pip install -r requirement.txt
ADD . /code/
RUN chmod 755 /code/entrypoint.sh
ENTRYPOINT [ "/code/entrypoint.sh" ]

