var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// ����Ĭ���ļ��м��
app.UseDefaultFiles();

// ���þ�̬�ļ��м��
app.UseStaticFiles();

app.Run();

