import schools from "../data/school.json";

export const get_school = (req, res) => {
  const { school_id } = req.params;
  let school = schools.find((p) => p.npsn == school_id);

  if (school == null) {
    return res.status(404).json({ message: "sekolah tidak ditemukan" });
  }

  return res.status(200).json(school);
};

export const get_schools = (req, res) => {
  return res.status(200).json(schools);
};
