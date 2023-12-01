const Student = ({
  student,
  changeEachRecord,
  calculateGrade,
  calculateTotal,
  currentPage,
}) => {
  let components = []
  student.map((index)=>{
    if(index.page==currentPage){
      components.push(
        <tr key={index.id} className="bg-gray-100">
        <th className="border p-2">{index.id}</th>
        <th className="p-2">
          <input
            className="w-full p-1"
            id={`Idtsu_${index.id}`}
            type="text"
            placeholder="กรุณาป้อนรหัสนิสิต"
            value={index.Idtsu}
            onChange={(e) =>
              changeEachRecord(
                e.target.value,
                null,
                null,
                null,
                null,
                index.id
              )
            }
            required
          />
        </th>
        <th className="p-2">
          <input
            className="w-full p-1"
            id={`Name_${index.id}`}
            type="text"
            placeholder="กรุณาป้อนชื่อนิสิต"
            value={index.Name}
            onChange={(e) =>
              changeEachRecord(
                null,
                e.target.value,
                null,
                null,
                null,
                index.id
              )
            }
            required
          />
        </th>

        <th className="border p-2">
          <p>
            <input
              className="w-full p-1"
              id={`Point_${index.id}`}
              type="text"
              placeholder="กรุณากรอกคะแนน"
              value={index.Collect}
              onChange={(e) =>
                changeEachRecord(
                  null,
                  null,
                  e.target.value,
                  null,
                  null,
                  index.id
                )
              }
              required
            />
          </p>
        </th>

        <th className="border p-2">
          <input
            className="w-full p-1"
            id={`Midterm_${index.id}`}
            type="text"
            placeholder="กรุณากรอกคะแนน"
            value={index.Midterm}
            onChange={(e) =>
              changeEachRecord(
                null,
                null,
                null,
                e.target.value,
                null,
                index.id
              )
            }
            required
          />
        </th>
        <th className="border p-2 bg-yellow-200">
          <input
            className="w-full p-1"
            id={`Final_${index.id}`}
            type="text"
            placeholder="กรุณากรอกคะแนน"
            value={index.Final}
            onChange={(e) =>
              changeEachRecord(
                null,
                null,
                null,
                null,
                e.target.value,
                index.id
              )
            }
            required
          />
        </th>
        <th className="border p-2">
          {index.Midterm && index.Final && index.Collect
            ? calculateTotal(index.Midterm, index.Final, index.Collect)
            : ""}
        </th>
        <th className="border p-2">
          {index.Midterm && index.Final && index.Collect
            ? calculateGrade(
                calculateTotal(index.Midterm, index.Final, index.Collect)
              )
            : ""}
        </th>
        <th className="border p-2">
          <p></p>
        </th>
      </tr>
      )
    }
  })
  return (
    components
  );
};

export default Student;
