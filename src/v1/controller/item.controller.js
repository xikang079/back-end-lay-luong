const ItemService = require('../services/item.service');

class ItemController {

    // Tạo item mới
    static createItem = async (req, res, next) => {
        res.send({
            message: 'Create item API is working!',
            metadata: await ItemService.addItem(req.body),
        });
    };
    
    // Lấy tất cả item
    static getAllItem = async (req, res, next) => {
        res.send({
            message: 'Get all item API is working!',
            metadata: await ItemService.getAllItem(),
        });
    };

    // Lấy item theo id
    static getItemById = async (req, res, next) => {
        res.send({
            message: 'Get item by id API is working!',
            metadata: await ItemService.getItemById(req.params._id),
        });
    }

    // Cập nhật item theo id
    static updateItemById = async (req, res, next) => {
        res.send({
            message: "Update item by id API is working!",
            metadata: await ItemService.updateItemById(req.params._id, req.body),
        });
    }

    // Cập nhật status theo id
    static updateStatusItemById = async (req, res, next) => {
        res.send({
            message: "Update status item by id API is working!",
            metadata: await ItemService.updateStatusItemById(req.params._id),
        });
    }

    // Cập nhật status nhiều item
    static updateStatusManyItem = async (req, res, next) => {
        res.send({
            message: "Update status many item API is working!",
            metadata: await ItemService.updateStatusManyItem(req.body.ids, req.body.status),
        });
    }

    // Xoá item theo id
    static deleteItemById = async (req, res, next) => {
        res.send({
            message: "Delete item by id API is working!",
            metadata: await ItemService.deleteItemById(req.params._id),
        });
    }

    // Xoá nhiều item theo id
    static deleteManyItemById = async (req, res, next) => {
        res.send({
            message: "Delete many item by id API is working!",
            metadata: await ItemService.deleteManyItemById(req.body.ids),
        });
    }
    
}

module.exports = ItemController;
