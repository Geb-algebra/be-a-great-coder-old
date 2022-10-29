#!/usr/bin/env bash

while ! python3 manage.py shell -c "
from django.db import connection
with connection.cursor() as cursor:
    cursor.execute('select 1')
    cursor.fetchall()
"
do
    echo "Wait until DB is ready..."
    sleep 5
done

python manage.py runserver 0.0.0.0:8000