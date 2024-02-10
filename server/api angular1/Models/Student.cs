namespace api_angular1.Models
{
    public class Student
    {
        public enum YearABC
        {
            A = 1,
            B = 2,
            C = 3
        }
        public int id { get; set; }
        //public string email { get; set; }
        public string name { get; set; }
        public string famalyName { get; set; }
        public int pone { get; set; }
        public string adress { get; set; }
        public int avgMarks { get; set; }
        public bool active { get; set; }
        public int route { get; set; }
        public int Year { get; set; }
        //public Test[] tests { get; set; }

        public string departure_date { get; set; }

        //public DaysOfAbsence[] daysAbsence {  get; set; }
    }
    public class Test
    {
        public int code { get; set; }
        public string description { get; set; }
        public string date { get; set; }
        public int mark { get; set; }
      
    }
    public class DaysOfAbsence
    {
        public DateOnly date { get; set; }
        public int days { get; set; }


    }
}
