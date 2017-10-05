D:\Python34\python.exe -m pip install -r %DEPLOYMENT_SOURCE%\requirements.txt --user
xcopy %DEPLOYMENT_SOURCE% %DEPLOYMENT_TARGET% /Y
