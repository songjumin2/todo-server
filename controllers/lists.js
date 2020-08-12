const connection = require("../db/mysql_connection");

// @desc   모든 할일 목록을 불러오는 api (25개씩)
// @route  GET  /api/v1/lists
// @req     offset, limit (?offset=0&limit=25)
// @res     success, items[ {id,title, date, completed}, cnt ]
exports.getList = async (req, res, next) => {
  let offset = req.query.offset;
  let limit = req.query.limit;

  if (!offset || !limit) {
    res.status(400).json({ message: "parameters setting error" });
    return;
  }

  let query = `select * from todo
  limit ${offset}, ${limit}`;

  try {
    [rows] = await connection.query(query);
    let cnt = rows.length;
    res.status(200).json({ success: true, items: rows, cnt: cnt });
    return;
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
