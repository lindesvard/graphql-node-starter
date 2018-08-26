export const paginate = () => async (Model, { limit = 10, ...args } = {}) => {
  const data = await Model.findAndCountAll({
    limit,
    order: [['Created', 'DESC']],
    ...args,
  })

  return {
    hasMore: data.rows.length !== data.count && data.count - 1 != 0,
    last: data.rows[data.rows.length - 1],
    ...data,
  }
}
