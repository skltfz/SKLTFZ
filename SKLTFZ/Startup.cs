using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SKLTFZ.Startup))]
namespace SKLTFZ
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
