var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader'); 
var roleBuilder = require('role.builder');
var roleMiner = require('role.miner');
var roleCenter = require('role.center');
var roleHarvesterUpgr = require('role.harvester_upgr');
var roleClaimer = require('role.claimer');
var roleBuilderM = require('role.builder_m');
var roleMinerM = require('role.miner_m');
var roleAttackerM = require('role.attacker_m');
var roleHealerM = require('role.healer_m');
var roleTransfer = require('role.transfer');
var roleZavodskoy = require('role.zavodskoy');
const { lastIndexOf } = require('lodash');

var price_old = -100;
var price_old_x = -100;
var price_old_e = -100;

const targetRoom = 'E27N39';
const targetRoom_E26N39 = 'E26N39';
const targetRoom_E26N38 = 'E26N38';

const profiler = require('screeps-profiler');
profiler.enable();
module.exports.loop = function() {
  profiler.wrap(function() {
    var lab_k_E27N39 = Game.getObjectById('62d1cc51db46af21be01b5d5')
    var lab_h_E27N39 = Game.getObjectById('62a7fe22d78d6e0577d2347c')
    var lab_kh1_E27N39 = Game.getObjectById('629f6a71aad9e479ce9ddb94')
    var lab_kh2_E27N39 = Game.getObjectById('62a5233f875df90a4ea2576a')
    var lab_kh3_E27N39 = Game.getObjectById('62d13471f319f22aaed658ce')
    var lab_kh4_E27N39 = Game.getObjectById('62d0cbf203adfb412da46ec0')
    var lab_kh5_E27N39 = Game.getObjectById('62d4c9d27d34ce0fbbf5b300')
    var lab_kh6_E27N39 = Game.getObjectById('62d681d11d5b68256a49ce75')
    var lab_kh7_E27N39 = Game.getObjectById('62ab2f1f00db9fe0cfe039fc')
    var lab_kh8_E27N39 = Game.getObjectById('627e6c9a3da25077c4530841')
    if(Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE] < 1000 && Game.rooms['E27N38'].terminal.store[RESOURCE_KEANIUM_HYDRIDE] < 10000){
        lab_kh1_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
        lab_kh2_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
        lab_kh3_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
        lab_kh4_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
        lab_kh5_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
        lab_kh6_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
        lab_kh7_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
        lab_kh8_E27N39.runReaction(lab_k_E27N39, lab_h_E27N39);
    }

    var lab_kh_E26N39 = Game.getObjectById('645d78b46ce943161f1b39f6')
    var lab_oh_E26N39 = Game.getObjectById('645f8328f942da500b4ed129')
    var lab_ka1_E26N39 = Game.getObjectById('645fb2f2147296f195b40eaa')
    var lab_ka2_E26N39 = Game.getObjectById('645f99922f446ee955d083f1')
    var lab_ka3_E26N39 = Game.getObjectById('645e430a3bc2244efecb21db')
    var lab_ka4_E26N39 = Game.getObjectById('645efc17d8be3e702c36fcdc')
    var lab_ka5_E26N39 = Game.getObjectById('645be3604667743154a8cb26')
    var lab_ka6_E26N39 = Game.getObjectById('645e520a56dfce00ff07de42')
    var lab_ka7_E26N39 = Game.getObjectById('645fc383a9d401278eb66bbe')
    var lab_ka8_E26N39 = Game.getObjectById('645fd832f0dd45114fe58921')
    if(Game.rooms['E27N38'].terminal.store[RESOURCE_KEANIUM_ACID] < 1000){
        lab_ka1_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
        lab_ka2_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
        lab_ka3_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
        lab_ka4_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
        lab_ka5_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
        lab_ka6_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
        lab_ka7_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
        lab_ka8_E26N39.runReaction(lab_kh_E26N39, lab_oh_E26N39);
    }


    var lab_o_E26N39 = Game.getObjectById('641d7adc2dcf14655f6b2809')
    var lab_h_E26N39 = Game.getObjectById('641cd2a756dfce6112f4237a')
    var lab_ho1_E26N39 = Game.getObjectById('6418d933d9b228ec1b24ce1f')
    var lab_ho2_E26N39 = Game.getObjectById('641b2e5a602ae5de4f15c5ba')
    var lab_ho3_E26N39 = Game.getObjectById('641e275af942da77b13fb12e')
    var lab_ho4_E26N39 = Game.getObjectById('641edbb8daa107df080a346c')
    var lab_ho5_E26N39 = Game.getObjectById('641e649988fe557aa4112c39')
    var lab_ho6_E26N39 = Game.getObjectById('641df04f8ec3bbba8485227b')
    var lab_ho7_E26N39 = Game.getObjectById('641cc9f9a9d4015fd1a24942')
    var lab_ho8_E26N39 = Game.getObjectById('641bc117abcf24382aafd502')
    if(Game.rooms['E26N39'].terminal.store[RESOURCE_HYDROXIDE] < 1000){
    lab_ho1_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    lab_ho2_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    lab_ho3_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    lab_ho4_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    lab_ho5_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    lab_ho6_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    lab_ho7_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    lab_ho8_E26N39.runReaction(lab_o_E26N39, lab_h_E26N39);
    }
    if(Game.rooms['E26N38'].terminal.store[RESOURCE_CATALYZED_KEANIUM_ACID] < 5000){
    var lab_ka = Game.getObjectById('641b91e6b453ddb3b960179e')
    var lab_x_E26N38 = Game.getObjectById('641e377449935619e1658b08')
    var lab_res1_E26N38 = Game.getObjectById('64181a463bc2246d6eb6d1de')
    var lab_res2_E26N38 = Game.getObjectById('641909e79ab55fab8a7d6d9b')
    var lab_res3_E26N38 = Game.getObjectById('641ce70713a8900987014b7e')
    var lab_res4_E26N38 = Game.getObjectById('641fad7475638362b64c582a')
    var lab_res5_E26N38 = Game.getObjectById('6422e159602ae525ea17ebe7')
    var lab_res6_E26N38 = Game.getObjectById('642147dbb7b7fe7c18515eff')
    var lab_res7_E26N38 = Game.getObjectById('641a7b78b1aab8de54f0cd63')
    var lab_res8_E26N38 = Game.getObjectById('631765532c2e6a6720723bc5')
    lab_res1_E26N38.runReaction(lab_ka, lab_x_E26N38);
    lab_res2_E26N38.runReaction(lab_ka, lab_x_E26N38);
    lab_res3_E26N38.runReaction(lab_ka, lab_x_E26N38);
    lab_res4_E26N38.runReaction(lab_ka, lab_x_E26N38);
    lab_res5_E26N38.runReaction(lab_ka, lab_x_E26N38);
    lab_res6_E26N38.runReaction(lab_ka, lab_x_E26N38);
    lab_res7_E26N38.runReaction(lab_ka, lab_x_E26N38);
    lab_res8_E26N38.runReaction(lab_ka, lab_x_E26N38);
    }


    var factory_E27N38 = Game.rooms['E27N38'].find(FIND_STRUCTURES, {
        filter: (structure) => {
            return(structure.structureType == STRUCTURE_FACTORY);
        }
    });
    if(factory_E27N38[0].store[RESOURCE_CRYSTAL] < 150){
        /*
        if(factory_E27N38[0].store[RESOURCE_KEANIUM_BAR] < 500){
            factory_E27N38[0].produce(RESOURCE_KEANIUM_BAR);
        }
        if(factory_E27N38[0].store[RESOURCE_LEMERGIUM_BAR] < 500){
            factory_E27N38[0].produce(RESOURCE_LEMERGIUM_BAR);
        }
        if(factory_E27N38[0].store[RESOURCE_PURIFIER] < 500){
            factory_E27N38[0].produce(RESOURCE_PURIFIER);
        }
        */
        factory_E27N38[0].produce(RESOURCE_CRYSTAL);
    }


    Game.cpu.generatePixel();
    var PS = Game.getObjectById('62d284f2f9fa9489ab8437aa');
    PS.processPower();
    var PS2 = Game.getObjectById('638cba22bba2192ef39474e8');
    PS2.processPower();
    var PS3 = Game.getObjectById('63eaf83305a170364bf5a531');
    PS3.processPower();
    var PS4 = Game.getObjectById('641bac1c9f75eaeee6b469f7');
    PS4.processPower();
    //Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].spawn(PS3);
    /*
    var closestDamagedWall = Game.rooms['E27N39'].find(FIND_STRUCTURES, {
        filter: (structure) => {
            return(structure.hits < structure.hitsMax) &&
            structure.hits < 1000000;
        }
    });
    console.log(closestDamagedWall.length);
    */
    /*
    var observer = Game.getObjectById('62d5941d3207940d0232022c');
    observer.observeRoom('E26N40');
    observer.observeRoom('E27N40');
    observer.observeRoom('E28N40');
    */
    /*
    var factory = Game.rooms['E27N39'].find(FIND_MY_STRUCTURES, {
        filter: {structureType: STRUCTURE_FACTORY}
    });
    */
   /*
    var factory = Game.getObjectById('631d8315f169257f0b3fefc7');
    if(factory.store[RESOURCE_KEANIUM_BAR] < 300){
        factory.produce(RESOURCE_KEANIUM_BAR);
    }
    if(factory.store[RESOURCE_REDUCTANT] < 200){
        factory.produce(RESOURCE_REDUCTANT);
    }
    if(factory.store[RESOURCE_CONDENSATE] < 60){
        factory.produce(RESOURCE_CONDENSATE);
    }
    if(factory.store[RESOURCE_CONCENTRATE] < 40){
        factory.produce(RESOURCE_CONCENTRATE);
    }
    if(factory.store[RESOURCE_OXIDANT] < 100){
        factory.produce(RESOURCE_OXIDANT);
    }
    if(factory.store[RESOURCE_EXTRACT] < 15){
        factory.produce(RESOURCE_EXTRACT);
    }
    */
    if(Game.time % 10 == 1){
        /*
        if(Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] <= 50000 && Game.market.credits > 9000000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_ENERGY &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(10000, 'E27N38', order.roomName) < 200000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                price_old_e = orders[0].price;
                if(orders[0].amount < 10000){
                    var result = Game.market.deal(orders[0].id, orders[0].amount, 'E27N38');
                }
                else{
                    var result = Game.market.deal(orders[0].id, 10000, 'E27N38');
                }
            }
        }
        */


        //Game.market.deal('', 1000);
        //64a08660a7e81c796f8d3206
        if(Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] >= 50000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_ENERGY &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY], 'E27N38', order.roomName) < 200000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                if(orders[0].price > price_old_e){
                    if(orders[0].amount > Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY]){
                        var result = Game.market.deal(orders[0].id, Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY], 'E27N38');
                    }
                    else{
                        var result = Game.market.deal(orders[0].id, orders[0].amount, 'E27N38');
                    }
                }
            }
        }
        if(Game.rooms['E28N39'].terminal.store[RESOURCE_ENERGY] >= 50000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_ENERGY &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E28N39'].terminal.store[RESOURCE_ENERGY], 'E28N39', order.roomName) < 200000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                if(orders[0].price > price_old_e){
                    if(orders[0].amount > Game.rooms['E28N39'].terminal.store[RESOURCE_ENERGY]){
                        var result = Game.market.deal(orders[0].id, Game.rooms['E28N39'].terminal.store[RESOURCE_ENERGY], 'E28N39');
                    }
                    else{
                        var result = Game.market.deal(orders[0].id, orders[0].amount, 'E28N39');
                    }
                }
            }
        }
    }
    if ((Game.time % 10 == 0)){
        /*
        if (Game.resources[PIXEL] >= 10) {
            var orders = Game.market.getAllOrders(order => order.resourceType == PIXEL &&
                                                  order.type == ORDER_BUY);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                var result = Game.market.deal(orders[0].id, 10);
            }
        }
        */
        if (Game.resources[CPU_UNLOCK] != 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == CPU_UNLOCK &&
                                                  order.type == ORDER_BUY);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                var result = Game.market.deal(orders[0].id, 1);
            }
        }
        
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] > 50000 && Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] < 200000 && Game.rooms['E27N38'].terminal.store.getFreeCapacity() > 50000){
            Game.rooms['E27N39'].terminal.send(RESOURCE_ENERGY, 50000, 'E27N38');
        }
        if(Game.rooms['E26N39'].terminal.store[RESOURCE_ENERGY] > 50000 && Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] < 200000 && Game.rooms['E27N38'].terminal.store.getFreeCapacity() > 50000){
            Game.rooms['E26N39'].terminal.send(RESOURCE_ENERGY, 50000, 'E27N38');
        }
        if(Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] > 50000 && Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] < 200000 && Game.rooms['E27N38'].terminal.store.getFreeCapacity() > 50000){
            Game.rooms['E26N38'].terminal.send(RESOURCE_ENERGY, 50000, 'E27N38');
        }
        

        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 10000 && Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE] != 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_KEANIUM_HYDRIDE &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE], 'E27N39', order.roomName) < 20000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                    if(orders[0].amount > Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE]){
                        var result = Game.market.deal(orders[0].id, Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE], 'E27N39');
                    }
                    else{
                        var result = Game.market.deal(orders[0].id, orders[0].amount, 'E27N39');
                    }
            }
        }
        /*
        
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_KEANIUM &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N39');
            }
        }
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_LEMERGIUM] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_LEMERGIUM &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N39');
            }
        }
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_UTRIUM] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_UTRIUM &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N39');
            }
        }
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_ZYNTHIUM] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_ZYNTHIUM &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N39');
            }
        }
        */
       /*
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE] > 0 && Game.rooms['E27N38'].terminal.store[RESOURCE_KEANIUM_HYDRIDE] < 20000) {
            Game.rooms['E27N39'].terminal.send(RESOURCE_KEANIUM_HYDRIDE, Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE], 'E27N38');
        }
        if(Game.rooms['E26N39'].terminal.store[RESOURCE_HYDROXIDE] > 0) {
            Game.rooms['E26N39'].terminal.send(RESOURCE_HYDROXIDE, Game.rooms['E26N39'].terminal.store[RESOURCE_HYDROXIDE], 'E27N38');
        }
        if(Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N38'].terminal.store[RESOURCE_KEANIUM_ACID] > 0) {
            Game.rooms['E27N38'].terminal.send(RESOURCE_KEANIUM_ACID, Game.rooms['E27N38'].terminal.store[RESOURCE_KEANIUM_ACID], 'E26N38');
        }
        
        if(Game.rooms['E26N39'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E26N39'].terminal.store[RESOURCE_CATALYZED_GHODIUM_ACID] > 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_CATALYZED_GHODIUM_ACID &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E26N39'].terminal.store[RESOURCE_CATALYZED_GHODIUM_ACID], 'E26N39', order.roomName) < 20000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                var result = Game.market.deal(orders[0].id, Game.rooms['E26N39'].terminal.store[RESOURCE_CATALYZED_GHODIUM_ACID], 'E26N39');
            }
        }
        
        /*
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE] > 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_KEANIUM_HYDRIDE &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE], 'E27N39', order.roomName) < 20000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                var result = Game.market.deal(orders[0].id, Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM_HYDRIDE], 'E27N39');
            }
        }
        */
        /*
        if(Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E26N38'].terminal.store[RESOURCE_POWER] > 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_POWER&&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E26N38'].terminal.store[RESOURCE_POWER], 'E26N38', order.roomName) < 20000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                var result = Game.market.deal(orders[0].id, Game.rooms['E26N38'].terminal.store[RESOURCE_POWER], 'E26N38');
            }
        }
        */
    /*
        if(Game.rooms['E26N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N39'].terminal.store[RESOURCE_HYDROGEN] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E26N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E26N39');
            }
        }
        if(Game.rooms['E26N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N39'].terminal.store[RESOURCE_OXYGEN] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_OXYGEN &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E26N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E26N39');
            }
        }

        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_HYDROGEN] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N39');
            }
        }
        if(Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_KEANIUM] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_KEANIUM &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N39');
            }
        }
        
        if(Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY] < 200000 && Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] > 50000) {
            Game.rooms['E27N38'].terminal.send(RESOURCE_ENERGY, 50000, 'E28N38');
        }
        /*
        if(Game.rooms['E26N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N39'].terminal.store[RESOURCE_CATALYST] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_CATALYST &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E26N39', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E26N39');
            }
        }
        */
       /*
        if(Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N38'].terminal.store[RESOURCE_HYDROGEN] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(400, 'E26N38', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 400, 'E26N38');
            }
        }
        if(Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N38'].terminal.store[RESOURCE_OXYGEN] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_OXYGEN &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(400, 'E26N38', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 400, 'E26N38');
            }
        }
        if(Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N38'].terminal.store[RESOURCE_CATALYST] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_CATALYST &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(400, 'E26N38', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 400, 'E26N38');
            }
        }
        if(Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N38'].terminal.store[RESOURCE_KEANIUM] <= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_KEANIUM &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(400, 'E26N38', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 400, 'E26N38');
            }
        }
        if(Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N38'].terminal.store[RESOURCE_LEMERGIUM] >= 200) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_LEMERGIUM &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E27N38'].terminal.store[RESOURCE_LEMERGIUM], 'E27N38', order.roomName) < 2000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                var result = Game.market.deal(orders[0].id, Game.rooms['E27N38'].terminal.store[RESOURCE_LEMERGIUM], 'E27N38');
            }
        }
        */
        ////////////////////////
        if(Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E28N38'].terminal.store[RESOURCE_HYDROGEN] == 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(10000, 'E28N38', order.roomName) < 200000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                price_old = orders[0].price;
                var result = Game.market.deal(orders[0].id, 10000, 'E28N38');
            }
        }
        if(Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E28N38'].terminal.store[RESOURCE_HYDROGEN] != 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E28N38'].terminal.store[RESOURCE_HYDROGEN], 'E28N38', order.roomName) < 20000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                if(orders[0].price > price_old){
                    if(orders[0].amount > Game.rooms['E28N38'].terminal.store[RESOURCE_HYDROGEN]){
                        var result = Game.market.deal(orders[0].id, Game.rooms['E28N38'].terminal.store[RESOURCE_HYDROGEN], 'E28N38');
                    }
                    else{
                        var result = Game.market.deal(orders[0].id, orders[0].amount, 'E28N38');
                    }
                }
            }
        }
        /*
        if(Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY] >= 200000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_ENERGY &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY], 'E28N38', order.roomName) < 200000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                    if(orders[0].amount > Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY] && orders[0].price > 10.0){
                        var result = Game.market.deal(orders[0].id, Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY], 'E28N38');
                    }
                    else{
                        var result = Game.market.deal(orders[0].id, orders[0].amount, 'E28N38');
                    }
            }
        }
        */
        /*
        if(Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E28N38'].terminal.store[RESOURCE_CATALYST] == 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_CATALYST &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E28N38', order.roomName) < 200000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                price_old_x = orders[0].price;
                if(orders[0].price < 200){
                var result = Game.market.deal(orders[0].id, 1000, 'E28N38');
                }
            }
        }
        */
        if(Game.rooms['E28N38'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E28N38'].terminal.store[RESOURCE_CATALYST] != 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_CATALYST &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E28N38'].terminal.store[RESOURCE_CATALYST], 'E28N38', order.roomName) < 20000);
            if(orders.length != 0){
                orders.sort(function(a,b){return b.price - a.price;});
                if(orders[0].price > price_old_x){
                    if(orders[0].amount > Game.rooms['E28N38'].terminal.store[RESOURCE_CATALYST]){
                        var result = Game.market.deal(orders[0].id, Game.rooms['E28N38'].terminal.store[RESOURCE_CATALYST], 'E28N38');
                    }
                    else{
                        var result = Game.market.deal(orders[0].id, orders[0].amount, 'E28N38');
                    }
                }
            }
        }
        ////////////////////////
        /*
        var orders_h = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
            order.type == ORDER_SELL);
            orders_h.sort(function(a,b){return a.price - b.price;});
        var orders_h_buy = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
            order.type == ORDER_BUY);
            orders_h_buy.sort(function(a,b){return b.price - a.price;});
        price_old = orders_h[0].price;
        */

        if(Game.time % 10 == 0){
        if(Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] >= 20000 && Game.rooms['E26N38'].terminal.store[RESOURCE_CATALYZED_KEANIUM_ACID] > 0) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_CATALYZED_KEANIUM_ACID &&
                                                  order.type == ORDER_BUY &&
                                                  Game.market.calcTransactionCost(Game.rooms['E26N38'].terminal.store[RESOURCE_CATALYZED_KEANIUM_ACID], 'E26N38', order.roomName) < 20000);
            if(orders.length != 0){
                var orders_h = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
                    order.type == ORDER_SELL);
                    orders_h.sort(function(a,b){return a.price - b.price;});
                var orders_o = Game.market.getAllOrders(order => order.resourceType == RESOURCE_OXYGEN &&
                    order.type == ORDER_SELL);
                    orders_o.sort(function(a,b){return a.price - b.price;});
                var orders_k = Game.market.getAllOrders(order => order.resourceType == RESOURCE_KEANIUM &&
                    order.type == ORDER_SELL);
                    orders_k.sort(function(a,b){return a.price - b.price;});
                var orders_x = Game.market.getAllOrders(order => order.resourceType == RESOURCE_CATALYST &&
                    order.type == ORDER_SELL);
                    orders_x.sort(function(a,b){return a.price - b.price;});
                orders.sort(function(a,b){return b.price - a.price;});
                if(orders[0].price > (orders_h[0].price * 2 + orders_o[0].price + orders_k[0].price + orders_x[0].price)){
                var result = Game.market.deal(orders[0].id, Game.rooms['E26N38'].terminal.store[RESOURCE_CATALYZED_KEANIUM_ACID], 'E26N38');
                }
                else{
                    if(Game.time % 10000 == 0){
                        Game.market.createOrder({
                            type: ORDER_SELL,
                            resourceType: RESOURCE_CATALYZED_KEANIUM_ACID,
                            price: ((orders_h[0].price * 2 + orders_o[0].price + orders_k[0].price + orders_x[0].price) + ((orders_h[0].price * 2 + orders_o[0].price + orders_k[0].price + orders_x[0].price)*0.01)),
                            totalAmount: Game.rooms['E26N38'].terminal.store[RESOURCE_CATALYZED_KEANIUM_ACID],
                            roomName: "E26N38"   
                        });
                    }
                }
            }
        }
        }
        


        
        /*
        if (Game.rooms['E27N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N39'].terminal.store[RESOURCE_POWER] <= 100 && Game.market.credits > 30000000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_POWER &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N39', order.roomName) < 4000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N39');
            }
        }
        if (Game.rooms['E26N39'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N39'].terminal.store[RESOURCE_POWER] <= 100 && Game.market.credits > 30000000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_POWER &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E26N39', order.roomName) < 4000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E26N39');
            }
        }
        if (Game.rooms['E26N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E26N38'].terminal.store[RESOURCE_POWER] <= 100 && Game.market.credits > 30000000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_POWER &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E26N38', order.roomName) < 4000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E26N38');
            }
        }
        if (Game.rooms['E27N38'].terminal.store[RESOURCE_ENERGY] >= 2000 && Game.rooms['E27N38'].terminal.store[RESOURCE_POWER] <= 100 && Game.market.credits > 30000000) {
            var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_POWER &&
                                                  order.type == ORDER_SELL &&
                                                  Game.market.calcTransactionCost(1000, 'E27N38', order.roomName) < 4000);
            if(orders.length != 0){
                orders.sort(function(a,b){return a.price - b.price;});
                var result = Game.market.deal(orders[0].id, 1000, 'E27N38');
            }
        }
        */
    }
    
    
    var controller = Game.getObjectById('5bbcae7b9099fc012e639264');
    const linkFrom = Game.rooms['E27N39'].lookForAt('structure', 44, 16)[0];
    const linkTo = Game.rooms['E27N39'].lookForAt('structure', 29, 36)[0];
    linkFrom.transferEnergy(linkTo);
    const linkFromUpgr = Game.rooms['E27N39'].lookForAt('structure', 10, 5)[0];
    const linkToUpgr = Game.rooms['E27N39'].lookForAt('structure', 9, 33)[0];
    
    if(controller.ticksToDowngrade >= 198000){
        linkFromUpgr.transferEnergy(linkTo);
        linkTo.transferEnergy(linkToUpgr);
    }
    else{
        linkFromUpgr.transferEnergy(linkToUpgr);
    }
    const linkFrom_E26N37 = Game.getObjectById('62dd9014409ee7fb6d9823cf');
    const linkTo_E26N37 = Game.getObjectById('62de9d898a8620f8c222b40e');
    const linkFromUpgr_E26N37 = Game.getObjectById('62f00ee7ec828a100fdc8d2f');
    linkFrom_E26N37.transferEnergy(linkTo_E26N37);
    linkTo_E26N37.transferEnergy(linkFromUpgr_E26N37);
    const linkFrom_E28N38 = Game.getObjectById('6447c9adde83adb1effd7df7');
    const linkTo_E28N38 = Game.getObjectById('644900bd02fec90a81c6ec42');
    linkFrom_E28N38.transferEnergy(linkTo_E28N38);

    const linkFrom_E28N39 = Game.getObjectById('6453410b8e3d19f8e63d7eb7');
    const linkTo_E28N39 = Game.getObjectById('645fb03130a2d976cccc6076');
    linkFrom_E28N39.transferEnergy(linkTo_E28N39);

    
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    /*
    Границы ключ переломлен пополам
    А наш батюшка Ленин совсем усоп
    Он разложился на плесень и на липовый мёд
    А перестройка всё идёт и идёт по плану
    И вся грязь превратилась в голый лёд
    И всё идёт по плану
    Всё идёт по плану
    А моя судьба захотела на покой
    Я обещал ей не участвовать в военной игре
    Но на фуражке, на моей, серп и молот, и звезда
    Как это трогательно: серп и молот, и звезда
    Лихой фонарь ожидания мотается
    И всё идёт по плану
    Всё идёт по плану
    А моей женой накормили толпу
    Мировым кулаком растоптали ей грудь
    Всенародной свободой растерзали ей плоть
    Так закопайте ж её во Христе
    И всё идёт по плану
    Всё идёт по плану
    Один лишь дедушка Ленин хороший был вождь
    А все другие остальные такое дерьмо
    А все другие враги и такие дураки
    Над родною, над Отчизной бесноватый снег шёл
    Я купил журнал "Корея" — там тоже хорошо
    Там товарищ Ким Ир Сен, там то же, что у нас
    Я уверен, что у них то же самое
    И всё идёт по плану
    Всё идёт по плану
    А при коммунизме всё будет заебись
    Он наступит скоро, надо только подождать
    Там всё будет бесплатно, там всё будет в кайф
    Там, наверное, вообще не надо будет умирать
    Я проснулся среди ночи и понял, что
    Всё идёт по плану
    Всё идёт по плану
    А всё идёт по плану
    Всё идёт по плану
    Всё
    */
    var my_spawns = ['Spawn1','Spawn2','Spawn3','Spawn4','Spawn5','Spawn6','Spawn7','Spawn8'
,'Spawn9','Spawn10','Spawn11', 'Spawn12', 'Spawn13', 'Spawn14', 'Spawn15','Spawn16', 'Spawn17'];
    
    _.forEach(my_spawns, function(room_spawn){
        var PCs = Game.spawns[room_spawn].room.find(FIND_POWER_CREEPS);
        if(PCs.length > 0){
            if(PCs[0].enableRoom(PCs[0].room.controller) == ERR_NOT_IN_RANGE && PCs[0].room.controller.isPowerEnabled == false){
                PCs[0].moveTo(PCs[0].room.controller);
            }
            
            Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].usePower(PWR_GENERATE_OPS);
            /*
            var extantions = Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(
                        structure.structureType == STRUCTURE_TERMINAL ||
                        structure.structureType == STRUCTURE_STORAGE) &&
                        structure.store[RESOURCE_ENERGY] > 0;
                    }
                });
            var realExtansions = Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(
                        structure.structureType == STRUCTURE_EXTENSION) &&
                        structure.store.getFreeCapacity() > 0;
                    }
                });
            var extantion = Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].pos.findClosestByRange(extantions);
            /*
            var factory = Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return(structure.structureType == STRUCTURE_FACTORY);
                }
            });
            */
            /*
            if(Game.powerCreeps['E27N39_MAIN'].usePower(PWR_OPERATE_EXTENSION, extantion) == ERR_NOT_IN_RANGE && realExtansions.length != 0){
                Game.powerCreeps['E27N39_MAIN'].moveTo(extantion);
            }
            */
            /*
            if(Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].usePower(PWR_OPERATE_FACTORY, factory) == ERR_NOT_IN_RANGE && Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].store[RESOURCE_OPS] >= 100 && factory.level != 4){
                Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].moveTo(factory);
            }
            if(Game.powerCreeps['E27N39_MAIN'].usePower(PWR_OPERATE_TOWER, tower) == ERR_NOT_IN_RANGE){
                Game.powerCreeps['E27N39_MAIN'].moveTo(tower);
            }
            
            */
           if(PCs[0].room == '[room E26N38]'){
            
            var lab = Game.getObjectById('64181a463bc2246d6eb6d1de');
            if(Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].usePower(PWR_OPERATE_LAB, PCs[0].pos.findClosestByPath(lab)) == ERR_NOT_IN_RANGE){
                Game.powerCreeps['CERTIFIED FORKLIFT DRIVER'].moveTo(PCs[0].pos.findClosestByPath(lab));
            }
           }
        }
        var towers = Game.spawns[room_spawn].room.find(FIND_MY_STRUCTURES, {
            filter: {structureType: STRUCTURE_TOWER}
        })
        _.forEach(towers, function(tower){
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (
                        structure.structureType != STRUCTURE_WALL &&
                        structure.structureType != STRUCTURE_RAMPART &&
                        structure.hits < structure.hitsMax);
                    }
            });
            var closestDamagedWall = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(structure.hits < structure.hitsMax) &&
                    structure.hits < 1000000;
                }
            });
            if(closestDamagedStructure || closestDamagedWall) {
                if(tower.store[RESOURCE_ENERGY] > 0){
                    tower.repair(closestDamagedStructure);
                    if(!closestDamagedStructure && tower.store[RESOURCE_ENERGY] > 200){
                        tower.repair(closestDamagedWall);
                    }
                }
            }
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                tower.attack(closestHostile);
                //Game.notify(Game.spawns[room_spawn].room + '_UNDER ATTACK!')
            }
        });






        var controller = Game.spawns[room_spawn].room.find(FIND_MY_STRUCTURES, {
            filter: {structureType: STRUCTURE_CONTROLLER}
        });
        var extantions = Game.spawns[room_spawn].room.find(FIND_MY_STRUCTURES, {
            filter: (structure) => {
                return(structure.structureType == STRUCTURE_EXTENSION) &&
                structure.isActive();
            }
        });
        //console.log(Game.spawns[room_spawn].room + " " + extantions.length);
        var links = Game.spawns[room_spawn].room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return(structure.structureType == STRUCTURE_LINK ||
                    structure.structureType == STRUCTURE_CONTAINER);
            }
        });
        var sources = Game.spawns[room_spawn].room.find(FIND_SOURCES);
        var constr_sites = Game.spawns[room_spawn].room.find(FIND_CONSTRUCTION_SITES);
        if(extantions.length < 5
            /*
             || controller[0].level == 1
             */){
            var room_level = "level 1";
            var Harvester_BP = [WORK,WORK,CARRY,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,CARRY,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,CARRY,CARRY,MOVE];
            var maxBuilders = 1;
            var maxCenters = 0;
            var CenterBP = [CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,CARRY,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        if(extantions.length < 10 && extantions.length >= 5
            //&& controller[0].level >= 2
            ){
            var room_level = "level 2";
            var Harvester_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxBuilders = 2;
            var maxCenters = 0;
            var CenterBP = [CARRY, MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        if(extantions.length < 20 && extantions.length >= 10
            //&& controller[0].level >= 3
            ){
            var room_level = "level 3";
            var Harvester_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 0;
            var CenterBP = [CARRY, MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        if(extantions.length < 30 && extantions.length >= 20
            //&& controller[0].level >= 4
            ){
            var room_level = "level 4";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY, MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 2;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        if(extantions.length < 40 && extantions.length >= 30
             //&& controller[0].level >= 5
             ){
            var room_level = "level 5";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 2;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        if(extantions.length < 50 && extantions.length >= 40 
            //&& controller[0].level >= 6
            ){
            var room_level = "level 6";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        if(extantions.length < 60 && extantions.length >= 50 
            //&& controller[0].level >= 7
            ){
            var room_level = "level 7";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        if(extantions.length >= 60 
            //&& controller[0].level >= 8
            ){
            var room_level = "level 8";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,CARRY,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 5;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            //var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE];
            var maxTransferers = 1;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 1;
            var Zavodskoy_BP = [CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        /*
        else{
            console.log(Game.spawns[room_spawn].room + " level -1");
            var Harvester_BP = [WORK,CARRY,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,CARRY,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 0;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 0;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
        }
        */
        console.log(extantions.length + Game.spawns[room_spawn].room + room_level);
       if(Game.time % 10 ==0){
        var testIfCanSpawn = Game.spawns[room_spawn].spawnCreep(Harvester_BP, 'dry',
        { dryRun: true });
        var testIfCanSpawnC = Game.spawns[room_spawn].spawnCreep(CenterBP, 'dry',
        { dryRun: true });
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.room == Game.spawns[room_spawn].room);
        var reserve_harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.room == Game.spawns[room_spawn].room && creep.body[0].type == WORK && creep.body[1].type == CARRY && creep.body[2].type == MOVE);
        //console.log(Game.spawns[room_spawn].room + " " + harvesters.length + "/" + maxHarvesters);
        //console.log("Room: " + Game.spawns[room_spawn].room + "\n" + "Level: " + room_level + "\n" + "Harvesters: " + harvesters.length + "/" + maxHarvesters + "\nConstraction Sites: " + constr_sites.length + "\nReserve Harvesters: " + reserve_harvesters.length);
        if(harvesters.length < maxHarvesters && testIfCanSpawn == 0){
            var newHarvesterName = 'H_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(Harvester_BP, newHarvesterName,
                {memory: {role: 'harvester'}});
        }
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.room == Game.spawns[room_spawn].room);
        if(upgraders.length < maxUpgraders && harvesters.length == maxHarvesters && testIfCanSpawn == 0 && reserve_harvesters.length == 0){
            var newUpgraderName = 'U_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(Ugrader_BP, newUpgraderName,
                {memory: {role: 'upgrader'}});
        }
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.room == Game.spawns[room_spawn].room);
        if(builders.length < maxBuilders && harvesters.length == maxHarvesters && constr_sites.length > 0 && upgraders.length == maxUpgraders && testIfCanSpawn == 0 && reserve_harvesters.length == 0){
            var newBuilderName = 'B_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(Builder_BP, newBuilderName,
                {memory: {role: 'builder'}});
        }
        var centers = _.filter(Game.creeps, (creep) => creep.memory.role == 'center' && creep.room == Game.spawns[room_spawn].room);
        if(centers.length < maxCenters && links.length >= 1 && testIfCanSpawnC == 0 && testIfCanSpawn == 0){
            var newCenterName = 'C_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(CenterBP, newCenterName,
                {memory: {role: 'center'}});
        }
        var harvester_upgr = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester_upgr' && creep.room == Game.spawns[room_spawn].room);
        if(harvester_upgr.length < maxHarvestersUpgr && harvesters.length == maxHarvesters && sources.length >= 2 && testIfCanSpawn == 0) {
            var newHarvesterUpgrName = 'HU_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(HarvesterUpgr_BP, newHarvesterUpgrName,
                {memory: {role: 'harvester_upgr'}});
        }
        if(harvesters.length < 1 && testIfCanSpawn != 0){
            var newHarvesterName = 'H_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep([WORK,CARRY,MOVE], newHarvesterName,
                {memory: {role: 'harvester'}});
        }
        if(centers.length < 1 && testIfCanSpawn == -6){
            var newCenterName = 'C_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], newCenterName,
                {memory: {role: 'center'}});
        }
        var transferer = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer' && creep.room == Game.spawns[room_spawn].room);
        if(transferer.length < maxTransferers){
            var newTransfererName = 'T_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(Trasnferer_BP, newTransfererName,
                {memory: {role: 'transfer'}});
        }
        var zavodskoy = _.filter(Game.creeps, (creep) => creep.memory.role == 'zavodskoy' && creep.room == Game.spawns[room_spawn].room);
        if(zavodskoy.length < maxZavodskoy){
            var newZavodskoyName = 'Z_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(Zavodskoy_BP, newZavodskoyName,
                {memory: {role: 'zavodskoy'}});
        }
        var builder_m = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder_m');
        if(builder_m.length < maxBuildersM){
            var newBuilderMName = 'BM_2.0_' + Game.time + "_" + Game.spawns['Spawn1'].room;
            Game.spawns['Spawn1'].spawnCreep(Builder_M_BP, newBuilderMName,
                {memory: {role: 'builder_m'}});
        }
        var miner = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.room == Game.spawns[room_spawn].room);
        if(miner.length < maxMiners){
            var newMinerName = 'M_2.0_' + Game.time + "_" + Game.spawns[room_spawn].room;
            Game.spawns[room_spawn].spawnCreep(Miner_BP, newMinerName,
                {memory: {role: 'miner'}});
        }
       }
    });
    
    


    
    
    
    
    
    
    
    
    
    
    

    
    if(Game.time % 10000 == 0){
        console.log('NOTIFICATION HAS BEEN SENT');
        Game.notify("Your curent balance is: " + Game.market.credits);
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'center') {
            roleCenter.run(creep);
        }
        if(creep.memory.role == 'harvester_upgr') {
            roleHarvesterUpgr.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'builder_m') {
            roleBuilderM.run(creep);
        }
        if(creep.memory.role == 'transfer') {
            roleTransfer.run(creep);
        }
        if(creep.memory.role == 'zavodskoy') {
            roleZavodskoy.run(creep);
        }
    }
    console.log(Game.cpu.bucket);
    console.log('Time: ' +  Game.time);
    console.log('OK!')
    console.log("H: " + price_old);
    console.log("X: " + price_old_x);
    console.log('E: ' + price_old_e);
    });
    
}
