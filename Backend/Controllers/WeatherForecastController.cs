using Microsoft.AspNetCore.Mvc;

namespace SPORT.Backend.Controllers
{
    [Route("api/[controller]")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetHelloMessage()
        {
            var response = new { message = "Hello, World!" };
            return Ok(response); // Retourne la réponse en JSON
        }
    }
}