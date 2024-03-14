from django.shortcuts import render

def index(request):
    return render(request, "myblog/index.html", {'context': {'category': 'home'}})

def projects(request):
    return render(request, "myblog/projects.html", {'context': {'category': 'projects'}})