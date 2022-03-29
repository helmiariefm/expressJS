import students from "../data/student.json";
import schools from "../data/school.json";

export const get_student = (req, res) => {
  const { student_id } = req.params;
  let student = students.find((p) => p.id == student_id);
  let school = schools.find((p) => p.npsn == student.npsn);
  Object.assign(student,{school:school});

  if (student == null) {
    return res.status(404).json({ message: "siswa tidak ditemukan" });
  }

  return res.status(200).json(student);
};

export const get_students = (req, res) => {
  return res.status(200).json(students);
};

export const add_student = (req, res) => {
  const { name, npsn, kelas } = req.body;

  let school = schools.find((p) => p.npsn == npsn);
  let student = students.find((p) => p.name == name);

  if(school == null){
    return res.status(404).json({message: "NPSN Tidak Valid"})
  }else if(student != null){
    return res.status(404).json({message: "Nama Siswa Sudah Ada"})
  }else{
    let student = {
      id: students.length + 1,
      name: name,
      npsn: npsn,
      kelas: kelas,    
    };

    students.push(student);

    return res.status(201).json(student);
  }
};

export const update_student = (req, res) => {
  const { student_id } = req.params;
  const { name, npsn, kelas } = req.body;

  let student = students.find((p) => p.id == student_id);

  if (student == null) {
    return res.status(404).json({ message: "siswa tidak ditemukan" });
  }

  student.name = name;
  student.npsn = npsn;
  student.kelas = kelas;

  return res.status(200).json(student);
};

export const delete_student = (req, res) => {
  const { student_id } = req.params;
  let student = students.find((p) => p.id == student_id);

  if (student == null) {
    return res.status(404).json({ message: "siswa tidak ditemukan" });
  }

  students.splice(student.index, 1);

  return res.status(200).json({message: "siswa berhasil di hapus"});
};
