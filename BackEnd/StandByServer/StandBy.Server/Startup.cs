using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;

using Microsoft.Owin.Cors;

using Owin;

[assembly: OwinStartup(typeof(StandBy.Server.Startup))]

namespace StandBy.Server
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            app.UseCors(CorsOptions.AllowAll);


            ConfigureAuth(app);
        }
    }
}
