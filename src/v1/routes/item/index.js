"use strict"

const express = require('express');
const router = express.Router();
const ItemController = require('../../controller/item.controller');
const asyncHandle = require('../../utils/asyncHandle');

// Tạo item mới
router.post('/create', asyncHandle(ItemController.createItem));

// Lấy tất cả item
router.get('/get-all', asyncHandle(ItemController.getAllItem));

// Lấy item theo id
router.get('/:_id', asyncHandle(ItemController.getItemById));

// Cập nhật item theo id
router.put('/:_id', asyncHandle(ItemController.updateItemById));

// Cập nhật status theo id
router.put('/status/:_id', asyncHandle(ItemController.updateStatusItemById));

// Cập nhật status nhiều item
router.patch('/status-many', asyncHandle(ItemController.updateStatusManyItem));

// Xoá item theo id
router.delete('/:_id', asyncHandle(ItemController.deleteItemById));

// Xoá nhiều item theo id
router.patch('/delete-many', asyncHandle(ItemController.deleteManyItemById));


module.exports = router;