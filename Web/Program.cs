var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// 启用默认文件中间件
app.UseDefaultFiles();

// 启用静态文件中间件
app.UseStaticFiles();

app.Run();

