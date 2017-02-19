from django.shortcuts import render, HttpResponse
  # Create your views here.
  # def index(request):
  #   response = "Hello, I am your first request!"
  #   return HttpResponse(response)
  def index(request):
    print "*"*50
    return render(request, 'fourth_app/index.html')

  def show(request):
    print (request.method)
    return render(request, 'fourth_app/show_users.html')
