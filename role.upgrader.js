var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.transferring && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.transferring = false;
        }
        if(!creep.memory.transferring && creep.store.getFreeCapacity() == 0) {
            creep.memory.transferring = true;
        }

        if(creep.memory.transferring && creep.room.controller.ticksToDowngrade <= 199990) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#00ffff'}});
            }
        }   
        else {
            var link = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(structure.structureType == STRUCTURE_LINK ||
                        structure.structureType == STRUCTURE_CONTAINER) &&
                        structure.isActive();
                }
            });
            if(link.length != 0){
                var sources = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return(structure.structureType == STRUCTURE_LINK ||
                            structure.structureType == STRUCTURE_CONTAINER) &&
                            structure.isActive();
                    }
                });
                if(creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#00ffff'}});
                }
            }
            else{
                var sources = creep.pos.findClosestByPath(FIND_SOURCES);
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE || creep.harvest(sources) == ERR_NOT_ENOUGH_ENERGY) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = roleUpgrader;