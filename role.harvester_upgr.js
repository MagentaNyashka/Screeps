var roleHarvesterUpgr = {
    run: function(creep) {
        if(creep.memory.transferring && creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.transferring = false;
        }
        if(!creep.memory.transferring && creep.store.getFreeCapacity() <= 10){
            creep.memory.transferring = true;
        }
        if(creep.memory.transferring){
            var extantions = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION) &&
                        structure.isActive() && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if(extantions.length > 0){
                ex_d = creep.pos.findClosestByPath(extantions);
                if(creep.transfer(ex_d, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(ex_d, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else{
            var sources = creep.room.find(FIND_SOURCES, {
                filter: (source) => {
                    return (source.energy > 0);
                    }
            });
            if(sources.length > 1){
                if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else{
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};
module.exports = roleHarvesterUpgr;