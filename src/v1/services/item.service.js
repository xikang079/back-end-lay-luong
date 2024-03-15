const Item = require('../models/item.model');

class ItemService {
    // Tạo item mới
    static addItem = async (itemData) => {
        const item = new Item(itemData);
        await item.save();
        return item;
    };

    // Lấy tất cả item
    static getAllItem = async () => {
        const listItem = Item.find();
        return listItem;
    };

    // Lấy item theo id
    static getItemById = async (_id) => {
        const item = await Item.findById(_id);
        return item;
    };

    // Cập nhật item theo id
    static updateItemById = async (_id, itemData) =>{
        const option = {new : true};
        const updateItemById = await Item.findByIdAndUpdate(_id, itemData, option);
        return updateItemById;
    }

    // Cập nhật status item theo id
    static updateStatusItemById = async (_id) =>{
        let item = await Item.findById(_id);
        item.status = item.status === 'active' ? 'inactive' : 'active';
        await item.save();
        return item;
    }

    // Cập nhật status nhiều item
    static updateStatusManyItem = async (ids, status) =>{
        const result = await Item.updateMany(
            { _id: { $in: ids } },
            { $set: { status: status } }
        );
        return result;
    }

    // Xóa item theo id
    static deleteItemById = async (_id) =>{
        const item = await Item.findByIdAndDelete(_id);
        return item;
    }

    // Xoá nhiều item theo id
    static deleteManyItemById = async (ids) =>{
        const listItem = await Item.deleteMany({ _id: { $in: ids } });
        return listItem;
    }
    
}

module.exports = ItemService;
