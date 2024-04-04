var roleTransfer = {
    run: function(creep) {
        var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => {
                return(
                    structure.structureType == STRUCTURE_POWER_SPAWN);
                }
        });
        if(creep.memory.transferring && creep.store[RESOURCE_POWER] <= 0 && creep.ticksToLive > 50){
            creep.memory.transferring = false;
        }
        if(!creep.memory.transferring && creep.store[RESOURCE_POWER] != 0){
            creep.memory.transferring = true;
        }
        if(creep.memory.transferring){
                if(creep.transfer(targets, RESOURCE_POWER) == ERR_NOT_IN_RANGE){
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
                /*
                if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
                */
                    
        }
        else{
            var terminal = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(structure.structureType == STRUCTURE_TERMINAL) &&
                    structure.store[RESOURCE_POWER] > 0;
                }
            });
            if(creep.withdraw(terminal[0], RESOURCE_POWER, 10) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
};
module.exports = roleTransfer;