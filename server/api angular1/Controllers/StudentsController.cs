using api_angular1.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_angular1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        public static List<Student> STUDENTS = new List<Student>
        {
           new Student{id=1,name="ceeehna",famalyName="eeee",active=false,adress="רחוב במכבים 6",avgMarks=79,departure_date="32" },
          new Student{id=2,name="chana",famalyName="ddf",active=true,adress="רחוב6",avgMarks=99,departure_date="90-" },
           new Student{id=3,name="tami",famalyName="תמצלמל",active=false,adress="רחוב השומר 45",avgMarks=92,departure_date="32" },
          new Student{id=4,name="rivki",famalyName="קרק'6",active=true,adress="נחום 23",avgMarks=99,departure_date="32" }
        };
        // GET: api/<TaksController>
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return STUDENTS;
          
                
        }

        // GET api/<TaksController>/5
        [HttpGet("active={active}")]
        public IEnumerable<Student> Get(bool active)
        {
           Console.WriteLine(active);
            if (active)
                return STUDENTS.Where(s => s.active);
            return STUDENTS;
        }
        [HttpGet("name={name}")]
        public IEnumerable<Student> Get(string name)
       {

           if (name == null)
                return STUDENTS;
           var s= STUDENTS.Where(s => s.name.Contains(name) || s.famalyName.Contains(name));
            Console.WriteLine(s);

            return s;
    
        }
        // POST api/<TaksController>
        [HttpPost]
        public Student Post([FromBody] Student student)
        {

            student.id = STUDENTS.Max(s => s.id) + 1;
            Console.WriteLine(student);
            STUDENTS.Add(student);
            return student;
        }

        // PUT api/<TaksController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Student value)
        {
            Student student = STUDENTS.Find(s => s.id == id);
            if (student != null)
            {
                student.pone = value.pone;
                student.active = value.active;
                student.Year = value.Year;
                student.route = value.route;
                student.adress = value.adress;
                //student.tests = value.tests;
                student.famalyName = value.famalyName;
                student.name = value.name;
                student.departure_date=value.departure_date;
                //student.daysAbsence=value.daysAbsence;
                return Ok();
            }
            return BadRequest("student is null!");
        }
        // DELETE api/<TaksController>/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var student = STUDENTS.Find(s => s.id == id);
            STUDENTS.Remove(student);
            if (!STUDENTS.Contains(student))
                return true;
            return false;
        }
    }
}
