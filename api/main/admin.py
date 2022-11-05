from django.contrib import admin
from .models import (
    Problem,
    ProblemStatus,
)

# Register your models here.
admin.site.register(Problem)
admin.site.register(ProblemStatus)
