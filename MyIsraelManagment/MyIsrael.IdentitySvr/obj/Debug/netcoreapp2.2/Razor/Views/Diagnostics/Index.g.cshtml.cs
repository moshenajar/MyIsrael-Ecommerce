#pragma checksum "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a5c01cf61c0f9a25c83c1845589b4d55e0ce9270"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Diagnostics_Index), @"mvc.1.0.view", @"/Views/Diagnostics/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Diagnostics/Index.cshtml", typeof(AspNetCore.Views_Diagnostics_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\_ViewImports.cshtml"
using MyIsrael.IdentitySvr;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a5c01cf61c0f9a25c83c1845589b4d55e0ce9270", @"/Views/Diagnostics/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"df7a1c13eb5f4c0212c911842fd300881e3ea9e9", @"/Views/_ViewImports.cshtml")]
    public class Views_Diagnostics_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<DiagnosticsViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(28, 54, true);
            WriteLiteral("\n<h1>Authentication cookie</h1>\n\n<h3>Claims</h3>\n<dl>\n");
            EndContext();
#line 7 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
     foreach (var claim in Model.AuthenticateResult.Principal.Claims)
    {

#line default
#line hidden
            BeginContext(158, 12, true);
            WriteLiteral("        <dt>");
            EndContext();
            BeginContext(171, 10, false);
#line 9 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
       Write(claim.Type);

#line default
#line hidden
            EndContext();
            BeginContext(181, 18, true);
            WriteLiteral("</dt>\n        <dd>");
            EndContext();
            BeginContext(200, 11, false);
#line 10 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
       Write(claim.Value);

#line default
#line hidden
            EndContext();
            BeginContext(211, 6, true);
            WriteLiteral("</dd>\n");
            EndContext();
#line 11 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
    }

#line default
#line hidden
            BeginContext(223, 32, true);
            WriteLiteral("</dl>\n\n<h3>Properties</h3>\n<dl>\n");
            EndContext();
#line 16 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
     foreach (var prop in Model.AuthenticateResult.Properties.Items)
    {

#line default
#line hidden
            BeginContext(330, 12, true);
            WriteLiteral("        <dt>");
            EndContext();
            BeginContext(343, 8, false);
#line 18 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
       Write(prop.Key);

#line default
#line hidden
            EndContext();
            BeginContext(351, 18, true);
            WriteLiteral("</dt>\n        <dd>");
            EndContext();
            BeginContext(370, 10, false);
#line 19 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
       Write(prop.Value);

#line default
#line hidden
            EndContext();
            BeginContext(380, 6, true);
            WriteLiteral("</dd>\n");
            EndContext();
#line 20 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
    }

#line default
#line hidden
            BeginContext(392, 7, true);
            WriteLiteral("</dl>\n\n");
            EndContext();
#line 23 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
 if (Model.Clients.Any())
{

#line default
#line hidden
            BeginContext(427, 30, true);
            WriteLiteral("    <h3>Clients</h3>\n    <ul>\n");
            EndContext();
#line 27 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
         foreach (var client in Model.Clients)
        {

#line default
#line hidden
            BeginContext(514, 16, true);
            WriteLiteral("            <li>");
            EndContext();
            BeginContext(531, 6, false);
#line 29 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
           Write(client);

#line default
#line hidden
            EndContext();
            BeginContext(537, 6, true);
            WriteLiteral("</li>\n");
            EndContext();
#line 30 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
        }

#line default
#line hidden
            BeginContext(553, 10, true);
            WriteLiteral("    </ul>\n");
            EndContext();
#line 32 "C:\MyIsrael\MyIsraelManagment\MyIsrael.IdentitySvr\Views\Diagnostics\Index.cshtml"
}

#line default
#line hidden
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<DiagnosticsViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
