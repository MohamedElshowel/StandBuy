

using System.Collections.Generic;
using System.Data.Entity;
using System.Security.Claims;



using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace StandBy.Server.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {

        public DbSet<Product> Products { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            Database.SetInitializer(new ApplicationDbInitializer());

        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
    }



    public class ApplicationDbInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {

            var products = GetProducts();
            context.Products.AddRange(products);
            context.SaveChanges();
            base.Seed(context);

        }

        private List<Product> GetProducts()
        {
            var categories = new List<Category>()
            {

            };
            return new List<Product>()
           {
               new Product(){Name="Product1",Image="image.jpg",Price=500,Discount=40}
           };
        }

        List<ApplicationUser> GetUsers()
        {
            var user = new ApplicationUser()
            {
                UserName = "user",
                Email = "user@a.a",
             

            };
            var admin = new ApplicationUser()
            {
                UserName = "admin",
                Email = "admin@a.a",
             
                PhoneNumber = "010",

            };
            return new List<ApplicationUser>() { admin, user };

        }
        


    }
}