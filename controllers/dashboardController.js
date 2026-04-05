const Record = require('../models/Record');

exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let income = 0, expense = 0;
    const categorySummary = {};

    records.forEach(r => {
      // income / expense calculation
      if (r.type === 'income') income += r.amount;
      else expense += r.amount;

      // category-wise calculation
      if (!categorySummary[r.category]) {
        categorySummary[r.category] = 0;
      }
      categorySummary[r.category] += r.amount;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense,
      categorySummary
    });

  } catch (error) {
    res.status(500).json({ msg: "Error fetching summary" });
  }
};