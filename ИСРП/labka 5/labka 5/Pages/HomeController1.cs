// RegisterViewModel.cs

using System.ComponentModel.DataAnnotations;

namespace WebApplication.Models
{
    public class RegisterViewModel
    {
        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Message")]
        public string Message { get; set; }
    }
}
