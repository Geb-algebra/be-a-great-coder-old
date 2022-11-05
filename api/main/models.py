from django.db import models
from django.conf import settings


# Create your models here.
class Problem(models.Model):  # AtCoderProblems APIから引っ張る
    id = models.CharField(max_length=127, primary_key=True)
    contest_id = models.CharField(max_length=127)
    problem_index = models.CharField(max_length=1)
    name = models.CharField(max_length=127)
    point = models.PositiveIntegerField()


class ProblemStatus(models.Model):
    id = models.UUIDField(primary_key=True)
    problem_id = models.ForeignKey(
        "Problem",
        on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    fixed_revenue = models.PositiveBigIntegerField()
    bonus_per_time = models.PositiveBigIntegerField()
    start_time = models.TimeField(auto_now_add=True)
    clear_time = models.TimeField()
    revenue_received = models.BooleanField(default=False)
