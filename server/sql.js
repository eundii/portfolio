module.exports = {
    projectList: {
        query: `select p1.*, p2.path, p3.category 
        from p_projects p1, p_images p2, p_category p3
        where p1.id = p2.project_id and p1.category_id = p3.id`
    },
    projectDetail: {
        query: `select p1.*, p2.path, p3.category 
        from p_projects p1, p_images p2, p_category p3
        where p1.id = ? and p1.id = p2.project_id and p1.category_id = p3.id`
        // ? => 넘어오는 파라미터 값
    },
    projectMainImg: {
        query: `select * from p_images
        where project_id = ? and type = 2`
    },

}