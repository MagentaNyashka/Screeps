
var roleHarvester = {
    run: function(creep) {
        if(creep.memory.transferring && creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.transferring = false;
        }
        if(!creep.memory.transferring && creep.store.getFreeCapacity() <= 10){
            creep.memory.transferring = true;
        }
        if(creep.memory.transferring){
            var link = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION) &&
                        structure.isActive() && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if(link.length > 0){
                link_d = creep.pos.findClosestByPath(link);
                if(creep.transfer(link_d, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(link_d, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else if(link.length == 0){
                towers = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return(structure.structureType == STRUCTURE_TOWER) &&
                            structure.isActive() && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
                if(towers.length > 0){
                    if(creep.transfer(creep.pos.findClosestByPath(towers), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.pos.findClosestByPath(towers), {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
                else{
                    other_objs = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return(structure.structureType == STRUCTURE_TERMINAL ||
                                structure.structureType == STRUCTURE_POWER_SPAWN) &&
                                structure.isActive() && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                        }
                    });
                }
            }
        }
        else{
            var sources = creep.room.find(FIND_SOURCES, {
                filter: (source) => {
                    return (source.energy > 0);
                    }
            });
            if(sources.length > 0){
                source = creep.pos.findClosestByPath(sources);
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};
module.exports = roleHarvester;